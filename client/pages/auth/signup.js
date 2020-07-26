import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/request";
import Button from "../../components/Button/Button";

export default () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { sendRequest, errors } = useRequest({
        url: "/api/users/signup",
        method: "post",
        body: {
            firstName,
            lastName,
            email,
            password,
        },
        onSuccess: () => Router.push("/"),
    });

    const onSubmit = async (e) => {
        e.preDefault();

        await sendRequest();
    };

    return (
        <article
            className="pa4 black-80 shadow-2 br2 ma5 w-50 center "
            style={{ background: "#cccccc" }}
        >
            <form onSubmit={onSubmit} className="flex flex-center flex-column">
                <h1 className="black tc">Sign Up</h1>
                <span>{errors}</span>
                <div className="mt3 w-80 center">
                    <label className="db fw4 lh-copy f6">First Name</label>
                    <input
                        className="pa2 input-reset ba bg-transparent w-100 measure"
                        type="text"
                        name="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mt3 w-80 center">
                    <label className="db fw4 lh-copy f6">Last Name</label>
                    <input
                        className="pa2 input-reset ba bg-transparent w-100 measure"
                        type="text"
                        name="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="mt3 w-80 center">
                    <label className="db fw4 lh-copy f6">Email address</label>
                    <input
                        className="pa2 input-reset ba bg-transparent w-100 measure"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt3 w-80 center">
                    <label className="db fw4 lh-copy f6">Password</label>
                    <input
                        className="pa2 input-reset ba bg-transparent w-100 measure"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mt3">
                    <Button title="Sign Up" />
                </div>
            </form>
        </article>
    );
};
