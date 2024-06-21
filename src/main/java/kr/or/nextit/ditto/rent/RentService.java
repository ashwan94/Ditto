package kr.or.nextit.ditto.rent;


import kr.or.nextit.ditto.book.BookVO;
import kr.or.nextit.ditto.common.SearchVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

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
    public List<RentVO> showBookList(String memberId){
        return mapper.showBookList(memberId);
    }

    public void rentReturn(RentVO rentNo){
        mapper.rentReturn(rentNo);
    }
    public void rentBookReturn(RentVO rentNo){
        mapper.rentBookReturn(rentNo);
    }

}
