export const openRecommendationPopup = () => {
    const url = "https://google.com";
    const width = 800;
    const height = 800;
    const windowFeatures = `width=${width},height=${height}`;

    console.log("🚀 ~ file: sizey-recommedation.js:7 ~ openRecommendationPopup ~ windowFeatures:", windowFeatures)
    window.open(url, "", windowFeatures);
    
}

module.exports = openRecommendationPopup;