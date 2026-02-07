<template>
	<picker mode="multiSelector" :value="dateTime" @change.stop="changedateTime" @columnchange.stop="changeaddCityColumn"  :range="dateTimeArray">
		<view class="flex-wrp " >
			<view class="color-181818 font28 line42 font-weight-500" v-if="timeVlaue">
				 {{timeVlaue}}
			 </view>
			<view v-if="!timeVlaue" class="color-C5C5C5 font28 line42">请选择</view>
		</view>
	</picker>
</template>

<script>
	import {FreeTimePicker,LimitTimePicker} from '@/utils/dateUtils.js'
	export default {
		data() {
		  	return {
		  		dateTimeArray: null,
		  		dateTime: [0,0],
		  	}
		},
		props:{
			type:{
				type:Number,
				default:0
			},
			timeVlaue:{
				type:String,
			}
		},
		
		mounted() {
			if(this.type == 0){
				this.dateTimeArray = FreeTimePicker();
			}else{
				this.dateTimeArray = LimitTimePicker();
			}
			
		},
		methods:{
			// 选择日期时间
			changedateTime(e) {
			    this.dateTime = e.detail.value
				this.$emit('changeTime',this.dateTime)
			},
			changeaddCityColumn(e){
				
			}
		}
	
	}
</script>

<style>
</style>
