import 'bootstrap/dist/css/bootstrap.css';
import client from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    return <div>
        <Header currentUser={currentUser} />
        <Component {...pageProps} />
    </div>
};


AppComponent.getInitialProps = async (appContext) => {
    const { data } = await client(appContext.ctx).get('/api/users/currentuser');
    let pageProps = {};
    if (appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    return {
        pageProps,
        ...data
    }
};

export default AppComponent;