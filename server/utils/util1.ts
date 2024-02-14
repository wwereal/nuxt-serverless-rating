import { sendError, createError, H3Event, type EventHandlerRequest } from 'h3';
export default function handleError(err: any, event: H3Event<EventHandlerRequest>) {
  const error = createError({
    statusCode: err.status,
    statusMessage: err.status,
    data: err.body,
  });
  sendError(event, error, false);
}