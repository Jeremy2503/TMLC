import java.util.*;
class sumfor{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number");
        int n=sc.nextInt();
        int s=0;
        for (int i = 0; i <=n; i++) {
            s=s+i;
        }
        System.out.println("sum = "+s);
    }
}