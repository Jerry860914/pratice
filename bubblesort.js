const vcc = [15,80,50,40,46,78,21,56,81,23,99,14,100]

function bubble_sort(arr) {
    for(i=0;i<arr.length;i++){
        for(j =i+1; j<arr.length; j++)
            if(arr[j]<arr[i]){
                var tem = arr[i];
                arr[i] = arr[j];
                arr[j] = tem;
            }

    }
    return arr;
}

console.log(bubble_sort(vcc));