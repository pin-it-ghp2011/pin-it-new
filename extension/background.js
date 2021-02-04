const onClick = () => {
  let title = window.document.getElementsByClassName('title');
  alert(`This article has been pinned for you!${}`);
};
document.getElementById('submit').addEventListener('click', onClick);
