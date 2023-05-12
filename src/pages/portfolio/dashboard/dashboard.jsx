import { useState } from 'react';
import { storeData } from "./data";
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

export const Dashboard = () =>{
  const [store, setStore] = useState(storeData[0]);

 
const dataRadar = {
  labels:['五顆星','四顆星','三顆星','二顆星','一顆星','尚未評論'],
  datasets:[
    {
      label:'數量',
      data: store.rating,
      backgrundColor:'rgba(105,168,170,0.2)',
      borderColor:'rgba(105,168,170,1)',
      borderWitdth:1,
    },
  ],
};

const optionsRadar = {
  responsive: true,
  plugins:{
    title:{
      display:true,
      text:'評價',
      align:"start",
    },
  },
};

const quantityByCategory = store.products.reduce((acc,product) => {
  if(!acc[product.category]){
    acc[product.category] = 0;
  }
    acc[product.category] += product.quantity;
    return acc;
  },{});

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
//   console.log(store)

// const dataDoughnut = {
//   labels:[...new Set(store.products.map((product) => product.category))],
//   datasets:[
//     {
//       data: Object.values(quantityByCategory),
//       backgroundColor: 
//       ['rgba(105, 168, 170, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(255, 206, 86, 0.2)',
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(255, 159, 64, 0.2)',
//     ],
//     borderColor: [
//       'rgba(105, 168, 170, 1)',
//       'rgba(54, 162, 235, 1)',
//       'rgba(255, 206, 86, 1)',
//       'rgba(75, 192, 192, 1)',
//       'rgba(153, 102, 255, 1)',
//       'rgba(255, 159, 64, 1)',
//     ],
//     borderWidth: 1,
//     },
//   ],
// };
// const optionsDoughnut = {
//   responsive: true,
//       plugins: {
//         title: {
//           display: true,
//           text: '商品分類',
//           align: "start",
//         },
//       },
//     };
// const dataLine ={
//   labels: store.traffic.map((item) => item.month),
//   dataset:[
//     {
//       label:"visitors",
//       data:store.traffic.map((item) => item.visitors),
//       borderColor:'rgba(105, 168, 170, 1)',
//       tension: 0,
//       pointStyle: 'rect',
//       pointBorderColor: 'rgba(105, 168, 170, 1)',
//       pointBackgroundColor: '#fff',
//       showLine: true,
//     },
//     {
//       label: "pageviews",
//       data: store.traffic.map((item) => item.pageviews),
//       borderColor: 'black',
//       tension: 0,
//       pointStyle: 'rect',
//       pointBorderColor: 'black',
//       pointBackgroundColor: '#fff',
//       showLine: true
//     }
//   ]
// }
// const optionsLine = {
//   responsive: true,
//   aspectRatio: 1,
//   plugins: {
//     title: {
//       display: true,
//       text: '流量',
//       align: "start",
//     },
//   },
// };

// const dataBar = {
//       labels: store.traffic.map((item) =>item.month),
//       datasets:[
//         {
//           label: "訂單",
//           data: store.orders.map((item) => item.sales),
//           backgroundColor:'rgba(105, 168, 170, 1)',
//         },
//       ],
//     };

//  const optionsBar = {
//       responsive: true,
//       aspectRatio: 1,
//       plugins: {
//         title: {
//           display: true,
//           text: '訂單量',
//           align: "start",
//         },
//       },
//     };

// const changeStore = (event) =>{
//   setStore(storeData.find ((store) => store.storeId === event.target.value));
// };

return(
  <div className="App">
  <AppBar position="relative" sx={{backgroundColor: "#69A8aa"}}>
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
  <FormControl sx={{minWidth:120}}>
    <InputLabel id="demo-simple-select-label">店家</InputLabel>
    <Select
    label={store.storeName}
    value={store.storeId}
    onChange={changeStore}
    >
      {storeData.map((store)=>{
        <MenuItem key={store.storeId} value={store.storeId}>
          {store.storeName}
        </MenuItem>
      })}
    </Select>
  </FormControl>
  <p>資料時間:{store.updateData}</p>
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
