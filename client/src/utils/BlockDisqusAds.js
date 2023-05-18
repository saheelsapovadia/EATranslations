const BlockDisqusAds = () => {
  setTimeout(() => {
    var dDiv = document.getElementById("disqus_thread");
    var iframe = dDiv.getElementsByTagName("iframe")[0];
    dDiv.removeChild(dDiv.getElementsByTagName("iframe")[0]);
  }, 5500);
};

module.exports = { BlockDisqusAds };
