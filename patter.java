class patter{
    public static void main(String[] args) {
        int N=5;
        for (int i = 0; i < 4; i++) {
            {
                for (int j = 1; j < N; j++) {
                    System.out.print(j);
                }
                N=N-1;
                System.out.println("");
            }
        }
    }
}