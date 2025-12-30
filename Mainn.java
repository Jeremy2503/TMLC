import java.util.Scanner;
class digitanalyzer
{
    int countDigit(int num, int d)
    {
        int count=0;
        while(num!=0)
        {
            int ld=num%10;
            if(ld==d)
                count++;
            num=num/10;
        }
        return count;
    }
}

public class Mainn
{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the number");
        int n=sc.nextInt();
        System.out.println("Enter the digit you want to count");
        int di=sc.nextInt();
        digitanalyzer da=new digitanalyzer();
        int c=da.countDigit(n, di);
        System.out.println("No of times "+di+"is used = "+c);

    }
}