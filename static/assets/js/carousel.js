// const prevIcon =
//   '<svg width="35" class="prevIcon c_change" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1688 27.7085C19.9509 27.7093 19.7356 27.6612 19.5388 27.5678C19.3419 27.4744 19.1685 27.3381 19.0313 27.1689L11.9875 18.4189C11.773 18.158 11.6558 17.8307 11.6558 17.4929C11.6558 17.1551 11.773 16.8278 11.9875 16.5669L19.2792 7.81687C19.5267 7.51905 19.8824 7.33176 20.268 7.29621C20.6537 7.26066 21.0376 7.37975 21.3354 7.62728C21.6332 7.87482 21.8205 8.23052 21.8561 8.61614C21.8916 9.00176 21.7725 9.38572 21.525 9.68353L15.0063 17.5002L21.3063 25.3169C21.4846 25.5309 21.5979 25.7916 21.6327 26.068C21.6675 26.3444 21.6224 26.6251 21.5028 26.8767C21.3831 27.1283 21.1939 27.3403 20.9575 27.4877C20.721 27.6352 20.4474 27.7118 20.1688 27.7085Z" fill="#333333"/></svg>';
// const nextIcon =
//   '<svg width="35" class="nextIcon c_change" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8312 27.7085C15.0491 27.7093 15.2644 27.6612 15.4612 27.5678C15.6581 27.4744 15.8315 27.3381 15.9687 27.1689L23.0125 18.4189C23.227 18.158 23.3442 17.8307 23.3442 17.4929C23.3442 17.1551 23.227 16.8278 23.0125 16.5669L15.7208 7.81687C15.4733 7.51905 15.1176 7.33176 14.732 7.29621C14.3463 7.26066 13.9624 7.37975 13.6646 7.62728C13.3668 7.87482 13.1795 8.23052 13.1439 8.61614C13.1084 9.00176 13.2275 9.38572 13.475 9.68353L19.9937 17.5002L13.6937 25.3169C13.5154 25.5309 13.4021 25.7916 13.3673 26.068C13.3325 26.3444 13.3776 26.6251 13.4972 26.8767C13.6169 27.1283 13.8061 27.3403 14.0425 27.4877C14.279 27.6352 14.5526 27.7118 14.8312 27.7085Z" fill="black"/></svg>';

$(".cell_box").owlCarousel({
  margin: 10,
  autoplay: true,
  loop: true,
  nav: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  //   navText: [prevIcon, nextIcon],
  responsive: {
    0: {
      items: 1,
    },
    650: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});
