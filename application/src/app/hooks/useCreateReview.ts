import { useState } from 'react';
import { toast } from 'react-hot-toast';

/**
 * @Notes - Use this hook in the frontend to create a review for a location.
 * @param {string} locationId - The ID of the location to create a review for.
 * @param {string} content - The comment to create.
 * @param {number} rating - The rating to give the location.
 * @param {any} session - The session object.
 * @returns {Object} - Returns an object containing the createReview function and a loading state.
 * @description - A custom hook that creates a review for a location.
 * @returns {Object} - Returns an object containing the createReview function and a loading state.
 */
const useCreateReview = () => {
    const [loading, setLoading] = useState(false);

    const createReview = async (locationId: string, content: string, rating: number, session: any) => {
        setLoading(true);
        try {
            // user not logged in
            if (!session) throw new Error('You must be logged in to create a review');
            const res = await fetch(`/api/reviews/createReview/${locationId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: content,
                    rating: rating,
                }),
            });

            const data = await res.json();
            if(data.error) throw new Error(data.error);
            toast.success('Review created successfully');
        } catch(error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { createReview, loading };
};

export default useCreateReview;