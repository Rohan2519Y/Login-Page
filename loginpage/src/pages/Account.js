import { useLocation } from "react-router-dom";
function Account() {

    const { state } = useLocation();
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '400px', border: '1px solid grey', height: '99vh' }}>
                <h2 style={{ width: '100%', height: '2%', padding: '0 10px' }}>Account Settings</h2>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15, padding: '0 10px' }}>
                    <img src="https://i.pravatar.cc/100" alt="profile" style={{ borderRadius: '50%', width: 60, height: 60, marginRight: 15 }} />
                    <div>
                        <div style={{ fontWeight: 600 }}> {state?.name}</div>
                        <div style={{ color: '#555' }}>{state?.email}</div>
                    </div>
                </div>
                <p style={{ paddingLeft: '10px' }}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr...</p>
            </div>
        </div>
    );
}

export default Account;