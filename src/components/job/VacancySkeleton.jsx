import React from "react"
import ContentLoader from "react-content-loader"

const VacancySkeleton = () => (
  <ContentLoader 
    speed={2}
    width={380}
    height={350}
    viewBox="0 0 380 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="0" rx="0" ry="0" width="360" height="220" /> 
    <rect x="100" y="230" rx="0" ry="0" width="170" height="30" /> 
    <rect x="20" y="270" rx="0" ry="0" width="340" height="380" />
  </ContentLoader>
)

export default VacancySkeleton