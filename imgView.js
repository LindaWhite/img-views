var imgList = [
    {
        name:'img1',
        date:'2019-01-08',
        category:'tour'
    },
    {
        name:'img2',
        date:'2019-02-08',
        category:'pets'
    },
    {
        name:'img3',
        date:'2019-03-08',
        category:'pets'
    },
    {
        name:'img4',
        date:'2019-04-08',
        category:'pets'
    },
    {
        name:'img5',
        date:'2019-05-08',
        category:'pets'
    },
    {
        name:'img6',
        date:'2019-06-08',
        category:'video'
    },
    {
        name:'img7',
        date:'2019-06-09',
        category:'video'
    },
    {
        name:'img8',
        date:'2019-06-10',
        category:'video'
    },
    {
        name:'img9',
        date:'2019-06-11',
        category:'video'
    },
    {
        name:'img10',
        date:'2019-06-12',
        category:'tv'
    },
    {
        name:'img11',
        date:'2019-06-13',
        category:'tv'
    },
    {
        name:'img12',
        date:'2019-06-14',
        category:'tv'
    },
    {
        name:'img13',
        date:'2019-06-15',
        category:'tv'
    },
    {
        name:'img14',
        date:'2019-06-16',
        category:'sports'
    },
    {
        name:'img15',
        date:'2019-06-17',
        category:'sports'
    },
    {
        name:'img16',
        date:'2019-06-18',
        category:'tour'
    },
    {
        name:'img17',
        date:'2019-06-19',
        category:'sports'
    },
    {
        name:'img18',
        date:'2019-06-20',
        category:'tour'
    },
    {
        name:'img19',
        date:'2019-06-21',
        category:'sports'
    },
    {
        name:'img0',
        date:'2019-01-22',
        category:'tour'
    }
];
function sortBykey(ary, key) {
    return ary.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 : (x > y) ? 1 : 0);
    })
}
  
new Vue({
    el: '#imgView',
    data: {
      imgList:imgList,
      isSortByCategory:true
    },
    methods: {
      sortByDate: function () {
        this.isSortByCategory = false;
        sortBykey(this.imgList,'date');
        this.imgList.reverse();
      },
      sortByCategory:function(){
        this.isSortByCategory = true;
        sortBykey(this.imgList,'category');
      },
      allowDrop:function(e){
        e.preventDefault();
      },
      drag:function(e){
        var index = e.target.getAttribute('index');
        e.dataTransfer.setData('index',index);
      },
      drop:function(e){
        e.preventDefault();
        var index = e.dataTransfer.getData('index');
        var tarCategory = e.target.getAttribute('type');
        this.imgList[index].category = tarCategory;
      }
    }
});
