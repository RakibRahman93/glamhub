import { NextResponse } from 'next/server';
import { users } from '@/lib/database';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  return NextResponse.json(user, { status: 200 });
}
