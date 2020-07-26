import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default ({ currentUser }) => {
    function initMobileMenu(toggle, menu) {
        menu.classList.add(styles.closed);
        ["click", "touchstart"].forEach(function (eventName) {
            toggle.addEventListener(eventName, function (evt) {
                evt.preventDefault();
                menu.classList.toggle(styles.open);
                menu.classList.toggle(styles.closed);
            });
        });
    }

    useEffect(() => {
        let toggle = document.getElementById("mobile-menu-toggle");
        let menu = document.getElementById("main-nav-mobile");
        initMobileMenu(toggle, menu);
    }, []);

    const links = [
        { label: "New Motors", href: "/new" },
        { label: "Used Motors", href: "/used" },
        { label: "Sell My Motor", href: "/sell" },
        !currentUser && { label: "Sign Up", href: "/auth/signup" },
        !currentUser && { label: "Sign In", href: "/auth/signin" },
        currentUser && { label: "Sell Tickets", href: "/tickets/new" },
        currentUser && { label: "My Orders", href: "/orders" },
        currentUser && { label: "Sign Out", href: "/auth/signout" },
    ]
        .filter((linkConfig) => linkConfig)
        .map(({ label, href }) => {
            return (
                <li key={href}>
                    <Link href={href}>
                        <a
                            className="f6 link dib  dim mr3 mr4-ns black pa2 white
                        "
                        >
                            {label}
                        </a>
                    </Link>
                </li>
            );
        });

    return (
        <header className={`pv0 ph2 relative  ${styles.navbar}`}>
            <div id="container" className="flex justify-between items-center">
                <Link href="/">
                    <a
                        className=" white hover-white-80 no-underline flex items-center pa2 pl4 f4
                 "
                    >
                        MotorHub
                    </a>
                </Link>

                <a
                    href="#0"
                    id="mobile-menu-toggle"
                    className="link color-inherit pa3 dn-l"
                >
                    ☰
                </a>

                <nav id="main-nav" className="dn db-l">
                    <div className="flex justify-between list pl0">{links}</div>
                </nav>

                <nav
                    id="main-nav-mobile"
                    className={`dn absolute ${styles.top100} tc right-0 w-100 w-30-ns pa2 bg-black o-80 ba`}
                >
                    <div className="list pl0">{links}</div>
                </nav>
            </div>
        </header>
    );
};
