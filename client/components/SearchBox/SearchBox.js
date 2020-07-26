import styles from "./SearchBox.module.css";
import Button from "../Button/Button";

const SearchBox = () => {
    const make = ["Audi", "BMW", "Honda", "Hyundai", "Skoda", "Suzuki"];
    return (
        <div className={styles.container}>
            <form
                className="br3 mv4 pa3 pt1  mw6 shadow-3  "
                style={{ background: "rgba(0, 0, 0, 0.44)" }}
            >
                <h2 className={styles.header}>Search your next car</h2>
                <div className="dt-ns dt--fixed-ns">
                    <div className="dtc-ns tc pb3">
                        <select className="pa2 br2 w-90 w-80-l">
                            <option selected disabled>
                                Make
                            </option>
                            {make.map((item) => {
                                return <option key={item}>{item}</option>;
                            })}
                        </select>
                    </div>
                    <div className="dtc-ns tc pb3">
                        <select className="pa2 br2 w-90 w-80-l">
                            <option selected disabled>
                                Model
                            </option>
                        </select>
                    </div>
                    <div className="dtc-ns tc pb3">
                        <select className="pa2 br2 w-90 w-80-l">
                            <option selected disabled>
                                Location
                            </option>
                        </select>
                    </div>
                </div>
                <div className="dt-ns dt--fixed-ns">
                    <div className="dtc-ns tc pb3">
                        <select
                            className="pa2 br2 w-41-m
                         mr2 "
                        >
                            <option selected disabled>
                                Min
                            </option>
                        </select>
                        <select className="pa2 br2 w-41">
                            <option selected disabled>
                                Max
                            </option>
                        </select>
                    </div>
                    <div className="dtc-ns tc pb3 ">
                        <select className="pa2 br2 w-90 w-80-l">
                            <option selected disabled>
                                Model
                            </option>
                        </select>
                    </div>
                    <div className="dtc-ns tc pb3">
                        <select className="pa2 br2 w-90 w-80-l">
                            <option selected disabled>
                                Location
                            </option>
                        </select>
                    </div>
                </div>

                <Button title="Search" />
            </form>
        </div>
    );
};

export default SearchBox;
