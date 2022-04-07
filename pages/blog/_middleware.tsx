import type { NextFetchEvent, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return NextResponse.redirect(
    'https://nextjs-tt3smv--3000.local.webcontainer.io'
  );
}
