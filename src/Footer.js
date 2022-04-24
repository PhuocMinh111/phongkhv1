import React from 'react'

function Footer() {
  const date = new Date().getFullYear()
    return (
        <section className='footer'>
      <h4>{date}</h4>
            <p className='footer-info'>Địa chỉ: 129 Ấp chợ, xã Thạnh Phú, huyện Châu Thành, Tiền Giang, Việt Nam. Điện thoại: 073.3089.3.</p>
        </section>
    )
}

export default Footer
