import React from 'react'

function YouTube({vediolink}) {
  return (
    <div>
        <iframe width="560" height="315" src={vediolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default YouTube