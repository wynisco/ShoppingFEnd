import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'ProShop Wynisco Student Project',
  description: 'Best IT Training in the world',
  keywords: 'QA Training, Data Engineering, Front end, UI',
}

export default Meta
