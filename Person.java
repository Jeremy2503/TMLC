
import java.util.ArrayList;

public class Person
{
    int id;
    String name;
    public Person(int id, String name)
    {
        this.id=id;
        this.name=name;
    }
    public void displayInfo()
    {
        System.out.println("ID= "+ id);
        System.out.println("Name="+name);
    }
    
}

class Student extends  Person {
    ArrayList<Integer> marks;
    public Student(int id, String name, ArrayList<Integer> marks)
    {
        super(id,name);
        this.marks=(marks != null) ? marks : new ArrayList<>();
    }
    double calculateAverage() throws Exception
    {
        if(marks.isEmpty())
            throw new Exception("Mark list is empty");
        int N=marks.size();
        double s=0;
        for(int i=0;i<N;i++)
            s=s+marks.get(i);
        double avg=s/N;
        return avg;
    }
    @Override
    public void displayInfo() {
        super.displayInfo(); 
        System.out.println("Marks: " + marks);
        try {
            System.out.println("Average Marks: " + calculateAverage());
        } catch (Exception e) {
            System.out.println("Average Marks: " + e.getMessage());
        }
    }
}

