import React from 'react';
import { useQuery, gql } from '@apollo/client';


const FETCH_INTERESTS = gql`
    {
        interests {
            id
            name
            subscribers {
                id
                username
            }
        }
    }
`;

const FetchInterests: React.FC = () => {
    const { loading, error, data } = useQuery(FETCH_INTERESTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.interests.map(({ id, name, subscribers }: { id: string, name: string, subscribers: Array<{ id: string, username: string }> }) => (
        <div key={id}>
            <h3>{name}</h3>
            <p>Subscribers:</p>
            {subscribers.map((subscriber: { id: string, username: string }) => (
                <div key={subscriber.id}>
                    <p>{subscriber.username}</p>
                </div>
            ))}
        </div>
    ));
};

export default FetchInterests;