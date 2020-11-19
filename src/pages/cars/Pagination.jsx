import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: Array.from({length: Math.ceil(this.props.totalItems / this.props.itemsPerPage)}, (_, i) => i + 1), 
        };
    }

    handleClick(page) {
        if (page === this.props.currentPage) {
            return;
        }
        this.props.changePage(page)
    }

    render() {
        if (this.state.pages === 1) {
            return <div></div>
        }
        return (
            <div className="pagination">
                <div>Seiten</div>
                <div className="pagination-items">
                    {this.state.pages.map((page) =>
                        <button onClick={() => this.handleClick(page)} className={`page-item${ this.props.currentPage === page ? ' active' : ''}`}>
                            {page}
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default Pagination;