import { useState } from 'react';
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardActions,
  FormControl,
  InputLabel,
  Select,
  Toolbar,
  Typography,
  Grid,
  MenuItem
} from '@mui/material';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
} from 'chart.js';
import { Doughnut, Line, Bar, Radar } from 'react-chartjs-2';
import styles from './dashboard.module.scss';
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Filler,
  Tooltip,
  Legend
);

const storeData = [
  {
    storeId: 1,
    storeName: 'PP泊瑟風泥',
    updateDate: '2021-10-01',
    rating: [20, 18, 16, 0, 2, 10],
    traffic: [
      {
        "month": "Oct 2022",
        "visitors": 50000,
        "pageviews": 150000
      },
      {
        "month": "Nov 2022",
        "visitors": 60000,
        "pageviews": 180000
      },
      {
        "month": "Dec 2022",
        "visitors": 70000,
        "pageviews": 210000
      },
      {
        "month": "Jan 2023",
        "visitors": 80000,
        "pageviews": 240000
      },
      {
        "month": "Feb 2023",
        "visitors": 90000,
        "pageviews": 270000
      },
      {
        "month": "Mar 2023",
        "visitors": 100000,
        "pageviews": 300000
      }
    ],
    products: [
      {
        "id": 1,
        "name": "【PP石墨烯】劉品言代言-石墨烯塑崩未來褲-莫蘭迪七色藏肉神褲",
        "category": "服裝",
        "price": 2980,
        "quantity": 100,
      },
      {
        "id": 2,
        "name": "【PP石墨烯】舒曼波科技減壓被",
        "category": "家居",
        "price": 9900,
        "quantity": 100,
      },
      {
        "id": 3,
        "name": "【PP石墨烯】石墨烯塑崩未來褲撞色系列(兩件組)-加贈PP飯店用-方巾+毛巾組",
        "category": "服裝",
        "price": 4482,
        "quantity": 100,
      },
    ],
    orders: [
      {
        month: "Oct 2022",
        sales: 100000,
      },
      {
        month: "Nov 2022",
        sales: 105000,
      },
      {
        month: "Dec 2022",
        sales: 112300,
      },
      {
        month: "Jan 2023",
        sales: 152400,
      },
      {
        month: "Feb 2023",
        sales: 189470,
      },
      {
        month: "Mar 2023",
        sales: 184500,
      }
    ]
  },
  {
    storeId: 2,
    storeName: 'Jvita結為塔',
    updateDate: '2021-10-01',
    rating: [6, 5, 34, 23, 2, 1],
    traffic: [
      {
        "month": "Oct 2022",
        "visitors": 5000,
        "pageviews": 15000
      },
      {
        "month": "Nov 2022",
        "visitors": 6000,
        "pageviews": 18000
      },
      {
        "month": "Dec 2022",
        "visitors": 12000,
        "pageviews": 18000
      },
      {
        "month": "Jan 2023",
        "visitors": 8000,
        "pageviews": 20000
      },
      {
        "month": "Feb 2023",
        "visitors": 19000,
        "pageviews": 37000
      },
      {
        "month": "Mar 2023",
        "visitors": 10000,
        "pageviews": 30000
      }
    ],
    products: [
      {
        "id": 1,
        "name": "【Jvita潔薇塔】限量150組超值回饋-睡美人大禮包-全能蜂膠微導濃萃膠囊*2盒(60顆/盒)+蔓越莓極光晶萃氧醞膠囊*5盒(60顆/盒) +蔓越莓極光晶萃氧醞膠囊輕量包*3包(20顆/包)+全能蜂膠微導濃萃膠囊試用包*5包(2顆/包)",
        "category": "食品",
        "price": 4980,
        "quantity": 100,
      },
      {
        "id": 2,
        "name": "【Jvita潔薇塔】康唐籤旨膠囊 Fucoxanthin Capsule(60顆/盒)",
        "category": "食品",
        "price": 2480,
        "quantity": 100,
      },
      {
        "id": 3,
        "name": "【Jvita潔薇塔】康唐籤旨膠囊 Fucoxanthin Capsule(60顆/盒)",
        "category": "食品",
        "price": 2480,
        "quantity": 100,
      },
    ],
    orders: [
      {
        month: "Oct 2022",
        sales: 10000,
      },
      {
        month: "Nov 2022",
        sales: 15000,
      },
      {
        month: "Dec 2022",
        sales: 11230,
      },
      {
        month: "Jan 2023",
        sales: 15200,
      },
      {
        month: "Feb 2023",
        sales: 18470,
      },
      {
        month: "Mar 2023",
        sales: 9500,
      }
    ]
  }
];

export const DashboardRefactor = () => {
  const [store, setStore] = useState(storeData[0]);

  // Radar Chart
  const dataRadar = {
    labels: ['五顆星', '四顆星', '三顆星', '二顆星', '一顆星', '尚未評論'],
    datasets: [
      {
        label: '數量',
        data: store.rating,
        backgroundColor: 'rgba(105, 168, 170, 0.2)',
        borderColor: 'rgba(105, 168, 170, 1)',
        borderWidth: 1,
      },
    ],
  };
  const optionsRadar = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '評價',
        align: "start",
      },
    },
  };

  // 這段程式碼用來計算每個產品類別(category)的數量(quantity)，
  // 並將結果儲存在一個物件(quantityByCategory)中。

  // 使用 reduce() 方法對 store.products 陣列進行迭代，
  // acc 參數代表累積器，一開始的值為空物件 {}。
  const quantityByCategory = store.products.reduce((acc, product) => {
    // 如果 acc 物件中不存在當前產品(product)的類別(category)屬性，
    // 則在 acc 中新增一個以該類別為鍵(key)、數量為零的屬性。
    if (!acc[product.category]) {
      acc[product.category] = 0;
    }
    // 將當前產品的數量(quantity)加到對應類別(category)的屬性值上。
    acc[product.category] += product.quantity;
    // 回傳更新後的 acc 物件，以便下一次迭代使用。
    return acc;
  }, {});

  // 最後，quantityByCategory 物件將包含所有產品類別的數量總和。

  // Doughnut Chart
  const dataDoughnut = {
    labels: [...new Set(store.products.map((product) => product.category))],
    datasets: [
      {
        data: Object.values(quantityByCategory),
        backgroundColor: [
          'rgba(105, 168, 170, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(105, 168, 170, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsDoughnut = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '商品分類',
        align: "start",
      },
    },
  };

  const dataLine = {
    labels: store.traffic.map((item) => item.month),
    datasets: [
      {
        label: "visitors",
        data: store.traffic.map((item) => item.visitors),
        borderColor: 'rgba(105, 168, 170, 1)',
        tension: 0,
        pointStyle: 'rect',
        pointBorderColor: 'rgba(105, 168, 170, 1)',
        pointBackgroundColor: '#fff',
        showLine: true,
      },
      {
        label: "pageviews",
        data: store.traffic.map((item) => item.pageviews),
        borderColor: 'black',
        tension: 0,
        pointStyle: 'rect',
        pointBorderColor: 'black',
        pointBackgroundColor: '#fff',
        showLine: true
      }
    ]
  }
  const optionsLine = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: '流量',
        align: "start",
      },
    },
  };

  const dataBar = {
    labels: store.traffic.map((item) => item.month),
    datasets: [
      {
        label: "訂單",
        data: store.orders.map((item) => item.sales),
        backgroundColor: 'rgba(105, 168, 170, 1)',
      },
    ],
  };

  const optionsBar = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: '訂單量',
        align: "start",
      },
    },
  };

  const changeStore = (event) => {
    setStore(storeData.find((store) => store.storeId === event.target.value));
  };
  console.log(store)
  return (
    <div className="App">
      <AppBar position="relative" sx={{ backgroundColor: "#69A8aa" }}>
        <div className="container">
          <Toolbar className={styles.Toolbar}>
            <Typography variant="h6" color="inherit" noWrap >
              Dashboard
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
      <div className="container">
        <Box sx={{ display: "flex", my: 4, justifyContent: "space-between" }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">店家</InputLabel>
            <Select
              label={store.storeName}
              value={store.storeId}
              onChange={changeStore}
            >
              {storeData.map((store) => (
                <MenuItem key={store.storeId} value={store.storeId}>
                  {store.storeName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <p>資料期間：{store.updateDate}</p>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Radar options={optionsRadar} data={dataRadar} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Doughnut options={optionsDoughnut} data={dataDoughnut} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Line options={optionsLine} data={dataLine} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Bar options={optionsBar} data={dataBar} />
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}