package seat;

import lombok.Data;

@Data
public class SeatVO {
    private int seatNo;
    private int seatRow;
    private int seatCol;
    private String seat_status;
}
