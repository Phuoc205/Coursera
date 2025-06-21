import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <div className='Header-left-side'>
                <h3>EduManager</h3>
            </div>
            <div className='Header-right-side'>
                <div className='button'>Tính năng</div>
                <div className='button'>Giới thiệu</div>
                <div className='button'>Bảng giá</div>
                <div className='button'>Liên hệ</div>
            </div>
        </div>
    )
}

export default Header