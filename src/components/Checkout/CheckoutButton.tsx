'use client'

import { loadStripe } from '@stripe/stripe-js'

import { Button } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import { selectUserDetailsState } from '@/store/authSlice'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

export default function Checkout() {
    const userDetails = useSelector(selectUserDetailsState);
    const userId = userDetails?.uid;
    const handlePayment = async () => {
        try {
            // 1. Call your backend API to create the checkout session
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const session = await response.json();
            
            // 2. If the session was created successfully, redirect to the URL
            if (session.url) {
                window.location.href = session.url;
            } else {
                // Handle the case where the session creation failed
                console.error('Failed to create checkout session:', session.error);
                alert('Could not initiate payment. Please try again.');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    }
    return (
        <div id="checkout">
            <Button onClick={handlePayment}> Unlock Pro! </Button>
        </div>
    )
}