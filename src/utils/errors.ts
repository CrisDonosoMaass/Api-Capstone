import { TRPCClientError } from '@trpc/client';

import type { AppRouter } from '@crisdonosomaass/cb-front-api';

export type ApiError = TRPCClientError<AppRouter>;

export class LoginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LoginError';
  }
}

export class RefreshTokenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RefreshTokenError';
  }
}

export class UploadDocumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UploadDocumentError';
  }
}
export class WebViewError extends Error {
  public readonly code: number;
  constructor(message: string, code: number) {
    super(message);
    this.name = 'WebViewError';
    this.code = code;
  }
}

export function isTRPCClientError(cause: unknown): cause is ApiError {
  return cause instanceof TRPCClientError;
}

export function isClientError(code: NonNullable<ApiError['data']>['code']) {
  return ['BAD_REQUEST', 'NOT_FOUND', 'FORBIDDEN'].includes(code);
}
