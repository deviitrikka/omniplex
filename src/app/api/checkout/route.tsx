import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req : NextRequest) {
  try {
     const { userId } = await req.json();
    const session = await stripe.checkout.sessions.create({
      // ui_mode: 'embedded', // <-- Important: tells Stripe to use embedded mode
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID, // <-- Replace with your Price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      // The return_url is where the user is sent after completing the payment
      // return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/return?session_id={CHECKOUT_SESSION_ID}`,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      client_reference_id: userId,
    });

    // Instead of a URL, we return the client_secret
    return NextResponse.json({ url : session.url });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}