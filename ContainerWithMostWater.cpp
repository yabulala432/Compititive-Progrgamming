class Solution {
public:
    int maxArea(vector<int>& height) {
        int maxArea = 0;
        int index1 = 0; int index2 = height.size()-1;
        while(index1<index2){
            int distance = index2-index1;
            if(height[index1]>height[index2]){
                
                maxArea = max(maxArea,height[index2]*distance);
                index2--;
            }else{
                maxArea = max(maxArea,height[index1]*distance);
                index1++;
            }
        }
        return maxArea;
    }
};
