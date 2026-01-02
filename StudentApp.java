import java.util.ArrayList;

public class StudentApp {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        ArrayList<Integer> marks1 = new ArrayList<>();
        marks1.add(85);
        marks1.add(90);
        marks1.add(78);

        ArrayList<Integer> marks2 = new ArrayList<>();

        Student s1 = new Student(1, "Alice", marks1);
        Student s2 = new Student(2, "Bob", marks2);

        students.add(s1);
        students.add(s2);
        for (Student s : students) {
            try {
                s.displayInfo(); 
            } catch (Exception e) {
                System.out.println("Error displaying student info: " + e.getMessage());
            }
            System.out.println("-------------------");
        }
    }
}