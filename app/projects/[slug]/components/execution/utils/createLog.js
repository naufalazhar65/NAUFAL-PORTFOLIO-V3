export default function createLog({
  step,
  message,
  type = "info",
}) {
  return {
    id: crypto.randomUUID(),

    step,

    type,

    message,

    timestamp: Date.now(),

    time: new Date().toLocaleTimeString(),
  };    
}