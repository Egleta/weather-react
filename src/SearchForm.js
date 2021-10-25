import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
    return (
        <div className="SearchForm">
            <form>
                <div className="row">
                    <div className="col-9">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Enter your city" />
                        </div>
                    </div>

                    <div className="col-2">
                        <button type="submit" className="btn btn-secondary">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
