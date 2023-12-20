import React from "react";
import {gql, useQuery} from "@apollo/client";



const FETCH_USERS = gql`
    {
        users {
            id,
            username
        }
    }
`;
const FetchUsers: React.FC = () => {
    const { loading, error, data } = useQuery(FETCH_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :-(</p>;

    return data.users.map(({ id, username }: { id: string, username: string }) => (
        <div key={id}>
            <p>
                <h4>Username</h4> {username}: ID {id}
            </p>
        </div>
    ));
};

export default FetchUsers;