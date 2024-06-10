package kr.or.nextit.ditto.podcast;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PodcastMapper {
    List<PodcastVO> selectPodcast();
}
