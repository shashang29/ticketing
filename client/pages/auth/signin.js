import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/request";
import Button from "../../components/Button/Button";

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { sendRequest, errors } = useRequest({
        url: "/api/users/signin",
        method: "post",
        body: {
            email,
            password,
        },
        onSuccess: () => Router.push("/"),
    });

    const onSubmit = async (event) => {
        event.preventDefault();

        await sendRequest();
    };

    return (
        <div className="">
            <article
                className="pa4 black-80  ma5 w-50 center shadow-2 br2"
                style={{ background: "#cccccc" }}
            >
                <form
                    onSubmit={onSubmit}
                    className="flex flex-center flex-column"
                >
                    <h1 className=" tc">Sign In</h1>
                    <span>{errors}</span>
                    <div className="mt3 w-80 center">
                        <label className="db fw4 lh-copy f6">
                            Email address
                        </label>
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
                        <Button title="Sign In" />
                    </div>
                </form>
            </article>
        </div>
    );
};
