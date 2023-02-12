const TopHeader = () =>
<header className="p-3 text-bg-dark sticky-top">
    <div className="container">
        <div className="d-flex justify-content-between align-items-center justify-content-center">
            <div className="d-flex justify-content-between align-items-center justify-content-center">
                <img src="../assets/gear-32.png" // insert logo here
                    alt="tl;dr logo"
                    className="ratio-1x1"></img>
                <div>
                    <h3>tl;dr</h3>
                </div>
            </div>
            <div className='text-end align-middle'>
                <img src="../assets/gear-32.png" // insert logo here
                    alt="options"
                    className="ratio-1x1"></img>
            </div>
        </div>
    </div>
  </header>
export default TopHeader