class MyClass {
  constructor(data) {
    super();

    this.startTimer();

    this.coords = {};
    this.clicked = false;

    this.el = document.getElementById('root');

    this.el.addEventListener('click', function(event) {
      this.clicked = true;
      event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
      this.coords.x = event.clientX;
      this.coords.y = event.clientY;
    });
  }

  refreshData(data) {
    this.items = [];
    data.forEach(item => {
      items.push({
        id: item.id,
        name: item.name
      });
    });
  }

  startTimer() {
    this.timer = setInterval(() =>
      fetch('example.com/latest-data.json')
        .then(result => result.json())
        .then(data => this.refreshData(data))
    , 100);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  // This method will be called when it is time to clean up
  cleanup() {
    // Remove event listeners?

    // Stop timer
    this.stopTimer();
  }
}
