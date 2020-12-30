import React, { Component } from 'react';

import AppContext from '../app-context';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Header extends Component {
    static contextType = AppContext;

	render() {
		return (
			<AppContext.Consumer>
                {appContext => {
                    return (
                        <div className="header">
                            <Row>
                                <Col xs={12} sm={4}>
                                    <h1 className="header__title">Slots</h1>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <ul className="header__nav">
                                        <li>
                                            <a href="#all" className={`header__nav-link header__nav-link--all ${appContext.filter.sort == 'all' ? "header__nav-link--active" : ""}`} onClick={e => this.props.onchange({'sort': 'all'})}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M14.999 0h-6a.469.469 0 00-.469.469v6a.469.469 0 00.469.469h6a.469.469 0 00.469-.469v-6A.469.469 0 0014.999 0zm-.469 6H9.47V.937h5.06zM23.531 0h-6a.469.469 0 00-.469.469v6a.469.469 0 00.469.469h6A.47.47 0 0024 6.469v-6A.469.469 0 0023.531 0zm-.468 6h-5.06V.937h5.06zM6.466 8.531h-6A.469.469 0 000 9v6a.469.469 0 00.469.469h6A.469.469 0 006.938 15V9a.47.47 0 00-.472-.469zm-5.529 6V9.468H6v5.063zM14.999 8.531h-6A.469.469 0 008.53 9v6a.469.469 0 00.469.469h6a.469.469 0 00.469-.469V9a.469.469 0 00-.469-.469zm-.469 6H9.47V9.468h5.06zM23.531 8.531h-6a.469.469 0 00-.469.469v6a.469.469 0 00.469.469h6A.469.469 0 0024 15V9a.469.469 0 00-.469-.469zm-.468 6h-5.06V9.468h5.06zM6.466 17.062h-6A.468.468 0 000 17.53v6a.469.469 0 00.469.469h6a.469.469 0 00.469-.469v-6a.469.469 0 00-.472-.468zm-5.529 6v-5.063H6v5.063zM14.999 17.062h-6a.469.469 0 00-.469.469v6a.469.469 0 00.469.469h6a.469.469 0 00.469-.469v-6a.469.469 0 00-.469-.469zm-.469 6H9.47v-5.063h5.06zM21.024 17.863a.469.469 0 10-.332.137.472.472 0 00.332-.137z" fill="#5b6770"/><path d="M23.532 17.062h-.72a.469.469 0 000 .938h.246v5.063h-5.06V18h.628a.469.469 0 000-.938h-1.1a.469.469 0 00-.469.469v6a.469.469 0 00.469.469h6a.469.469 0 00.469-.469v-6a.467.467 0 00-.463-.469zM2.976 6.137a.468.468 0 10.663 0 .477.477 0 00-.331-.133.472.472 0 00-.332.133z" fill="#5b6770"/><path d="M.469 6.937h.715a.469.469 0 000-.938H.937V.937H6V6h-.631a.469.469 0 000 .938h1.1a.469.469 0 00.469-.469v-6A.47.47 0 006.466 0h-6A.469.469 0 000 .469v6a.468.468 0 00.469.468z" fill="#5b6770"/></svg>
                                                All
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#new" className={`header__nav-link header__nav-link--new ${appContext.filter.sort == 'new' ? "header__nav-link--active" : ""}`} onClick={e => this.props.onchange({'sort': 'new'})}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16.667" height="24"><path d="M15.851 7.505H.816A.786.786 0 000 8.257v14.99a.746.746 0 00.418.657.876.876 0 00.825-.016l7.087-4.019 7.094 4.018a.875.875 0 00.825.016.746.746 0 00.418-.657V8.257a.784.784 0 00-.816-.752zm0 15.741l-7.4-4.191a.252.252 0 00-.123-.035.24.24 0 00-.119.033L.816 23.247V8.257h15.035zM15.851 0H.816A.786.786 0 000 .752V5.3a.786.786 0 00.816.752h15.035a.786.786 0 00.816-.752V.752A.786.786 0 0015.851 0zm0 5.3H.816V.752h15.035z" fill="#5b6770"/></svg>
                                                New
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#top" className={`header__nav-link header__nav-link--top ${appContext.filter.sort == 'top' ? "header__nav-link--active" : ""}`} onClick={e => this.props.onchange({'sort': 'top'})}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M23.952 9.093a.952.952 0 00-.821-.687l-7.337-.712-1.455-3.537a.345.345 0 00-.462-.192.374.374 0 00-.184.484l1.537 3.738a.351.351 0 00.29.221l7.546.733a.248.248 0 01.218.182.265.265 0 01-.073.281l-5.693 5.238a.378.378 0 00-.111.357l1.667 7.741a.261.261 0 01-.1.273.236.236 0 01-.278.013l-6.516-4.052a.337.337 0 00-.359 0l-6.516 4.051a.236.236 0 01-.278-.013.262.262 0 01-.1-.273l.86-4a.369.369 0 00-.266-.44.351.351 0 00-.42.278l-.86 4a1.012 1.012 0 00.371 1.03.909.909 0 001.05.051l6.337-3.941 6.336 3.94a.908.908 0 001.05-.051 1.011 1.011 0 00.371-1.03l-1.62-7.528 5.537-5.093a1.017 1.017 0 00.279-1.062z" fill="#5b6770"/><path d="M5.441 17.206a.369.369 0 00.266.44.331.331 0 00.078.009.356.356 0 00.343-.287l.467-2.168a.378.378 0 00-.111-.357L.791 9.6a.264.264 0 01-.074-.281.25.25 0 01.218-.182l7.546-.733a.354.354 0 00.29-.221l3-7.288a.249.249 0 01.465 0l.814 1.979a.345.345 0 00.462.192.375.375 0 00.184-.484L12.879.6a.94.94 0 00-1.757 0L8.208 7.693.87 8.405a.954.954 0 00-.821.687 1.018 1.018 0 00.278 1.062l5.537 5.093z" fill="#5b6770"/></svg>
                                                Top
                                            </a>
                                        </li>
                                    </ul>
                                    <Form className="header__search" onSubmit={e => { this.props.onchange({'search': e.target.querySelector('#search').value}); e.preventDefault(); }}>
                                        <Form.Control type="text" id="search" name="search" placeholder="Search" onChange={e => this.props.onchange({'search': e.target.value})} value={appContext.filter.search || ''} />
                                        <Form.Control type="submit" value="Search" />
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    )
                }}
            </AppContext.Consumer>
		)
	}
}

export default Header;