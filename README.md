# MCP SSE Client

A JavaScript client implementation for interacting with the MCP (Model Context Protocol) Server with Server-Sent Events (SSE) support.

## Overview

This client provides functionality to:
- Connect to SSE stream for real-time updates
- Execute tools (like adding numbers)
- Fetch resources (like personalized greetings)

The server implementation can be found at [mcp-python-sse](https://github.com/rohithtp/mcp-python-sse).

## Setup

1. Include the client in your project:
```javascript
import { addNumbers, getGreeting } from './sse_client.js';
```

2. The SSE connection will be automatically established when the client is loaded.

## Usage

### Listening to SSE Events

The client automatically sets up an SSE connection and listens for messages:

```javascript
// The connection is automatically established
// Messages will be logged to console
```

### Using Tools

#### Add Numbers
```javascript
const result = await addNumbers(5, 3);
console.log('Sum:', result); // Will output the sum
```

### Using Resources

#### Get Greeting
```javascript
const greeting = await getGreeting('Alice');
console.log('Greeting:', greeting); // Will output a personalized greeting
```

## API Reference

### Functions

#### `addNumbers(a: number, b: number)`
- Parameters:
  - `a`: First number
  - `b`: Second number
- Returns: Promise with the sum result

#### `getGreeting(name: string)`
- Parameters:
  - `name`: Name to include in greeting
- Returns: Promise with the greeting message

## Server Configuration

By default, the client connects to `http://localhost:8000`. The server implementation should be running and accessible at this address.

For server setup and configuration, please refer to the [mcp-python-sse](https://github.com/rohithtp/mcp-python-sse) repository. 