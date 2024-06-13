package kr.or.nextit.ditto.book;

import kr.or.nextit.ditto.common.SearchVO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {


    private final BookMapper mapper;

    @Autowired
    public BookService(BookMapper mapper) {
        this.mapper = mapper;
    }


    List<BookVO> selectBooks(){
        return mapper.selectBooks();
    }


}
