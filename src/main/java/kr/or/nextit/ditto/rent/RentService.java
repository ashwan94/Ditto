package kr.or.nextit.ditto.rent;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentService {
    private final RentMapper mapper;

    @Autowired
    public RentService(RentMapper mapper) {
        this.mapper = mapper;
    }


    // 도서 대여
    public int bookRent(RentVO vo) {
        return mapper.bookRent(vo);
    }

    // 도서 대여 상태 변경
    public void updateBookStatus(int bookNo){
        mapper.updateBookStatus(bookNo);
    }

    // 사용자 연체 확인
    public int checkOverdueDays(int memberNo){
        return mapper.checkOverdueDays(memberNo);
    }

    // 도서 대여 권수 확인
    public int checkRentCount(int memberNo){
        return mapper.checkRentCount(memberNo);
    }
}
