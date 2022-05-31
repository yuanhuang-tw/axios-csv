// 得獎名單
const winners = ['winner-a', 'winner-b', 'winner-c', 'winner-d'];

winners.forEach((winner) => {
  axios
    .get(`${winner}.csv`)
    .then((res) => {
      const tableData = res.data.split('\r\n');

      document.querySelector(`#${winner}`).innerHTML = tableData.reduce(
        (acc, data) => {
          let tr = data.split(',').reduce((acc, td) => {
            return (acc += `<td>${td}</td>`);
          }, '<tr>');

          tr += '</tr>';

          return (acc += tr);
        },
        ''
      );
    })
    .catch((err) => console.error(err));
});

// 決賽晉級名單
const finals = ['final-a', 'final-b', 'final-c', 'final-d'];

finals.forEach((final) => {
  axios
    .get(`${final}.csv`)
    .then((res) => {
      const tableData = res.data.split('\r\n');

      document.querySelector(`#${final}`).innerHTML = tableData.reduce(
        (acc, data) => {
          let tr = data.split(',').reduce((acc, td, index) => {
            if (index === 3) {
              td = `<a href="${td}" target="_blank">影片連結</a>`;
            }

            return (acc += `<td>${td}</td>`);
          }, '<tr>');

          tr += '</tr>';

          return (acc += tr);
        },
        ''
      );
    })
    .catch((err) => console.error(err));
});
