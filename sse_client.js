// Connect to SSE stream
const eventSource = new EventSource('http://localhost:8000/mcp/sse');

// Listen for messages
eventSource.onmessage = function(event) {
    const data = JSON.parse(event.data);
    console.log('Received:', data);
};

// Send a message to execute the add tool
export async function addNumbers(a, b) {
    const response = await fetch('http://localhost:8000/mcp/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type: 'request',
            action: 'execute',
            tool: 'add',
            data: { "a": a, "b": b }
        })
    });
    return await response.json();
}

// Get a greeting
export async function getGreeting(name) {
    const response = await fetch('http://localhost:8000/mcp/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type: 'request',
            action: 'get',
            resource: `greeting://${name}`,
            data: {}
        })
    });
    return await response.json();
}

// Get metrics based on a question
export async function getMetrics(question) {
    const response = await fetch('http://localhost:8000/mcp/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type: 'request',
            action: 'execute',
            tool: 'get_metrics',
            data: { question }
        })
    });
    const result = await response.json();
    return result.data;  // Returns the metrics object
} 
