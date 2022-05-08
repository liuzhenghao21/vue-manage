<template>
  <el-row gutter:20 class="home">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆时间：<span>2022-4-18</span></p>
          <p>上次登陆地点：<span>郑州</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 400px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(item, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="item"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div style="height: 280px" ref="echartsLine"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 200px">
          <div style="height: 180px" ref="echartsBar"></div>
        </el-card>
        <el-card style="height: 200px">
          <div style="height: 180px" ref="echartsPie"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getHome } from "../../../api/data.js";
// 引入echarts
import * as echarts from "echarts";
export default {
  name: "MyHome",
  data() {
    return {
      userImg: require("@/assets/images/user.jpg"),
      tableData: [],
      tableLabel: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getHome().then((res) => {
      const data = res.data;
      if (res.code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        // 拿到键值，也就是品牌名称
        const orderArr = Object.keys(order.data[0]);
        const series = [];
        orderArr.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        // 主页折线图
        const homeLine = {
          xAxis: {
            data: order.date,
          },
          yAxis: {},
          legend: {
            data: orderArr,
          },
          series,
        };
        const zhexian = echarts.init(this.$refs.echartsLine);
        zhexian.setOption(homeLine);
        // 用户柱状图
        const homeBar = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
        const zhuzhuang = echarts.init(this.$refs.echartsBar);
        zhuzhuang.setOption(homeBar);
        // 饼状图
        const homePie = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data: data.videoData,
              type: "pie",
            },
          ],
        };
        const bingtu = echarts.init(this.$refs.echartsPie);
        bingtu.setOption(homePie);
      }
    });
  },
};
</script>

<style>
</style>