// 7-load_balancer.js

function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

export default loadBalancer;

