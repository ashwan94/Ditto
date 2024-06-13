package kr.or.nextit.ditto.book;

import kr.or.nextit.ditto.common.SearchVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {
    List<BookVO> selectBooks();

}
