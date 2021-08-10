### 描述
在一个有序数组中，查找出第一个大于 9 的数字，假设一定存在。例如，arr = { -1, 3, 3, 7, 10, 14, 14 }; 则返回 10。



### 标准解法，二分法求解决
```js
public static void main(String[] args) {
	int targetNumb = 9;
	// 目标有序数组
	int[] arr = { -1, 3, 3, 7, 10, 14, 14 };
	int middle = 0;
	int low = 0;
	int high = arr.length - 1;
	while (low <= high) {
		middle = (high + low) / 2;
		if (arr[middle] > targetNumb && (middle == 0 || arr[middle - 1] <= targetNumb)) {
			System.out.println("第一个比 " + targetNumb + " 大的数字是 " + arr[middle]);
			break;
		} else if (arr[middle] > targetNumb) {
			// 说明该数在low~middle之间
			high = middle - 1;
		} 
}
```