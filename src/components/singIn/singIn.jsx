import './singIn.scss'



const SingIn = ({activeSing, setActiveSing}) => {
    console.log(activeSing);

    return (
        <div className={activeSing ? 'singIn-wrapper active' : 'singIn-wrapper'} onClick={() => setActiveSing(false)}>
            <div className="singIn-inner" onClick={(e) => e.stopPropagation()}>
                <h3>Sing In</h3>
                <div className='center'>
                    <input type='text' placeholder='Username' />
                    <input type='text' placeholder='Password' />
                    <button  onClick={() => setActiveSing(!activeSing)}>Sing In</button>
                </div>
                <p>Frogot Password?</p>
            </div>
        </div>
    )
}

export default SingIn;